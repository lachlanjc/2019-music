import Image from 'next/image'

export default ({ label, name, artwork }) => (
  <div>
    <Image src={artwork} width={256} height={256} alt={name} />
    <div>
      <span className="label">{label}</span>
      <strong>{name}</strong>
    </div>
    <style jsx>{`
      div {
        display: grid;
        grid-gap: 24px;
        grid-template-columns: 128px 1fr;
        align-items: center;
      }
      :global(img) {
        border-radius: 64px;
      }
      .label {
        text-transform: uppercase;
        color: var(--quaternary);
      }
      strong {
        font-size: 24px;
        margin-top: 4px;
      }
    `}</style>
  </div>
)
