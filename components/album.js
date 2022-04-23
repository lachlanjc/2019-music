import Image from 'next/image'

const Album = ({ label, name, artwork, artist }) => (
  <section>
    <Image src={artwork} width={256} height={256} alt={name} />
    <div>
      <span className="label">{label}</span>
      <strong>{name}</strong>
      <span>{artist}</span>
    </div>
    <style jsx>{`
      section {
        text-align: left;
        display: grid;
        grid-gap: 24px;
        grid-template-columns: 128px 1fr;
        align-items: center;
      }
      section :global(img) {
        border-radius: 8px;
      }
      strong {
        font-size: 24px;
        line-height: 1.125;
        display: block;
        margin-top: 4px;
      }
      .label {
        color: var(--quaternary);
        font-weight: 500;
        text-transform: uppercase;
      }
      span {
        display: block;
      }
    `}</style>
  </section>
)

export default Album
