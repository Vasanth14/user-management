import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Users() {
    
    const users = useSelector(state => state.users.users)

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <Link to='/create-user' className='btn btn-success btn-sm'>
                    Add +
            </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                              return  <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <button className='btn btn-sm btn-success me-2'>
                                            Update
                                        </button>
                                        <button className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users;