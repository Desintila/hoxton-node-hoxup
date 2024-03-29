import { User } from "../Types"


type Props = {
  user: User | null
  logIn: Function
}

function UserLoginItem({ user, logIn }: Props) {
  if (user === null) return <h1>Not signed in</h1>
  return (
    <li>
      <button
        className='user-selection'
        onClick={() => {
          logIn(user)
        }}
      >
        <img
          className='avatar'
          width='50'
          height='50'
          src={user.avatar}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <h3>
          {user.firstName} {user.lastName}
        </h3>
      </button>
    </li>
  )
}

export default UserLoginItem
