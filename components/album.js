import Image from 'next/image'

export default ({ label, name, artwork, artist }) => (
  <section>
    <Image src={artwork} width={512} height={512} alt={name} />
    <div>
      <span>{label}</span>
      <strong>{name}</strong>
      <span>{artist}</span>
    </div>
    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        text-align: left;
      }
      img {
        width: 128px;
        height: 128px;
        border-radius: 4px;
      }
      div {
        margin-left: 24px;
      }
      strong {
        margin-top: 12px;
        font-size: 24px;
        line-height: 1.125;
        display: block;
      }
      span {
        display: block;
      }
    `}</style>
  </section>
)
