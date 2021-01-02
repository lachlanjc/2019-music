import Image from 'next/image'

export default ({ label, name, artwork, artist }) => (
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
      :global(img) {
        border-radius: 4px;
      }
      div {
        margin-left: 24px;
      }
      strong {
        font-size: 24px;
        line-height: 1.125;
        display: block;
        margin-top: 4px;
      }
      .label {
        text-transform: uppercase;
        color: var(--quaternary);
      }
      span {
        display: block;
      }
    `}</style>
  </section>
)
