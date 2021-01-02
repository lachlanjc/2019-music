export default ({ name, artwork }) => (
  <div>
    <img src={artwork} width={128} alt={name} />
    <div>
      <strong>{name}</strong>
    </div>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
      }
      @media (min-width: 32em) {
        div {
        }
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
