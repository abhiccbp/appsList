import './index.css'

const TabItem = props => {
  const {TabDetails, update, isActive} = props
  const {tabId, displayText} = TabDetails
  const onclickBtn = () => {
    update(tabId)
  }

  const isActiveabc = isActive ? 'style' : ''
  return (
    <li className="abc">
      <button className={`${isActiveabc}`} onClick={onclickBtn}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
