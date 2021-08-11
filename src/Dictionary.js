import { useEffect, useRef, useState } from 'react'
import {
	IoLogoGithub,
	IoLogoTwitter,
	IoSearchOutline,
	IoVolumeHigh,
} from 'react-icons/io5'
import Loading from './Loading'

const Dictionary = () => {
	const [searchQuery, setSearchQuery] = useState('dictionary')
	const [words, setWords] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const audioRef = useRef()

	const fetchData = async () => {
		try {
			const response = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchQuery}`
			)

			if (!response.ok) {
				throw Error(
					"Sorry pal, we couldn't find definitions for the word you were looking for."
				)
			}
			const word = await response.json()

			setWords(word)
			setLoading(false)
		} catch (error) {
			setError(error.message)
		}
	}

	const searchWord = (e) => {
		e.preventDefault()
		setLoading(true)
		fetchData()
	}

	const playWordAudio = () => {
		audioRef.current.play()
	}

	useEffect(() => {
		fetchData()
	}, [])

	// display error message if an error is encounted
	if (error) {
		return (
			<>
				<div>{error}</div>
				<button
					className='error'
					onClick={() => window.location.reload()}>
					Refresh Page
				</button>
			</>
		)
	}

	if (loading) {
		return <Loading />
	}

	return (
		<>
			<section className='heading'>
				<header>
					<h1 className='title'>WordSearch</h1>
					<form onSubmit={searchWord}>
						<div>
							<label htmlFor='search'>Search</label>
							<input
								type='search'
								name='search'
								id='search'
								placeholder='Search words in english'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>
						<button type='submit'>
							<IoSearchOutline />
						</button>
					</form>
				</header>

				<article>
					<div>
						<div className='word'>
							<div>
								<h2>{words[0].word}</h2>
								<p className='phonics'>/{words[0].phonetic}/</p>
							</div>
							<div className='play-audio'>
								<button onClick={() => playWordAudio()}>
									<IoVolumeHigh />
								</button>
							</div>
						</div>
						{words[0].origin ? (
							<div className='details'>
								<h2>Origin:</h2>
								<p>{words[0].origin}</p>
							</div>
						) : (
							''
						)}
					</div>
				</article>
			</section>

			<article className='meaning-section'>
				<h2>Meaning</h2>

				<ul className='meaning'>
					{words[0].meanings.map((speech, index) => (
						<li key={index}>
							<h2>{speech.partOfSpeech}</h2>
							{speech.definitions.map((wordDefinition, index) => (
								<div className='meaning-details' key={index}>
									<p className='definition'>
										{wordDefinition.definition}
									</p>

									{wordDefinition.example ? (
										<p className='example'>
											{wordDefinition.example}
										</p>
									) : (
										''
									)}

									{wordDefinition.synonyms && (
										<div className='opposite'>
											<h3>Synonmys</h3>
											<div>
												{wordDefinition.synonyms.map(
													(synonym, index) => {
														if (index >= 5) return
														return (
															<p key={index}>
																{synonym}
															</p>
														)
													}
												)}
											</div>
										</div>
									)}
								</div>
							))}

							{/* <ul className='antonyms'>
								<li>
									<a href='#'>purpose</a>
								</li>
							</ul> */}
						</li>
					))}
				</ul>
			</article>

			<footer>
				<p>
					created by Williams Samuel{' '}
					<a
						href='https://twitter.com/williams_codes'
						target='_blank'>
						<IoLogoTwitter />
					</a>
				</p>

				<a
					href='https://github.com/williamssam/wordsearch'
					target='_blank'
					className='github-link'>
					<IoLogoGithub />
				</a>
			</footer>

			{words[0].phonetics.map((wordAudio, index) => (
				<audio
					src={`http:${wordAudio.audio}`}
					key={index}
					ref={audioRef}>
					Your browser does not support the
					<code>audio</code> element.
				</audio>
			))}
		</>
	)
}

export default Dictionary
