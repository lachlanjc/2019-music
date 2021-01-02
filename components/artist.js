import Image from 'next/image'

export default ({ name, artwork }) => (
  <div>
    <Image src={artwork} width={128} height={128} alt={name} />
    <div>
      <strong>{name}</strong>
    </div>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
      }
      img {
        width: 128px;
        height: 128px;
        border-radius: 64px;
      }
      strong {
        margin-left: 24px;
        font-size: 24px;
        display: block;
      }
    `}</style>
  </div>
)
