import Image from 'next/image'

export default ({ name, artwork }) => (
  <div>
    <Image src={artwork} width={256} height={256} alt={name} className="artwork" />
    <div>
      <strong>{name}</strong>
    </div>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
      }
      .artwork {
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
