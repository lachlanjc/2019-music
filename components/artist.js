import Image from 'next/image'

export default ({ label, name, artwork }) => (
  <section>
    <Image src={artwork} width={256} height={256} alt={name} />
    <div>
      <span className="label">{label}</span>
      <strong>{name}</strong>
    </div>
    <style jsx>{`
      section {
        display: grid;
        grid-gap: 24px;
        grid-template-columns: 128px 1fr;
        align-items: center;
      }
      section :global(img) {
        border-radius: 64px;
      }
      .label {
        color: var(--quaternary);
        font-weight: 500;
        text-transform: uppercase;
      }
      strong {
        font-size: 24px;
        margin-top: 4px;
        display: block;
      }
    `}</style>
  </section>
)
