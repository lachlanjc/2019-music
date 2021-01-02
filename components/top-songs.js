import Image from 'next/image'

export default ({ songs }) => (
  <ol>
    {songs.map((song, i) => (
      <li key={song.title}>
        <span>{i + 1}.</span>
        {song.artwork ? (
          <Image
            src={song.artwork.replace('512x512', '128x128')}
            width={128}
            height={128}
            alt={`${song.album} artwork`}
            className="artwork"
          />
        ) : (
            <div className="artwork" />
          )}
        <article>
          <strong>{song.title}</strong>
          <small>
            {song.artist}{' – '}
            {song.album.includes(' - Single') ? 'Single' : song.album}
          </small>
        </article>
      </li>
    ))}
    <style jsx>{`
      ol {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
        padding: 0 1rem;
        line-height: 1.375;
        background-color: var(--bg);
        color: var(--text);
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        height: 100%;
        max-height: 85vh;
        text-align: left;
      }
      @media (prefers-color-scheme: dark) {
        ol {
          background-color: transparent;
        }
      }
      li {
        border-bottom: 0.5px solid var(--divider);
        display: grid;
        grid-template-columns: 24px 64px 1fr;
        grid-gap: 12px;
        align-items: center;
        height: 80px;
        padding: 8px;
        overflow: hidden;
        scroll-snap-align: start;
      }
      span {
        font-weight: bold;
        color: var(--pink);
      }
      .artwork {
        width: 64px;
        height: 64px;
        border-radius: 4px;
      }
      div.artwork {
        background-color: var(--divider);
        display: inline-block;
      }
      article {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      strong {
        color: var(--text);
      }
      small {
        font-size: 0.875rem;
        color: var(--quaternary);
      }
    `}</style>
  </ol>
)
