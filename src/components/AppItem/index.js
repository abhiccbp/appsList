import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails

  return (
    <li className="liContainer">
      <img alt={appName} className="img" src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
