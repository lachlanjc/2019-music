import Image from 'next/image'

export default ({ name, artwork }) => (
  <div>
    <Image src={artwork} width={256} height={256} alt={name} />
    <div>
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
    `}</style>
  </div>
)
