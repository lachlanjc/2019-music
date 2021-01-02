export default ({ label, name, artwork, artist }) => (
  <section>
    <img src={artwork} width={256} alt={name} />
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
      strong {
        margin-top: 12px;
        font-size: 24px;
        display: block;
      }
      span {
        display: block;
      }
    `}</style>
  </section>
)
