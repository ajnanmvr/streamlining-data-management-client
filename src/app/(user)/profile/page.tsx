export default function Profile(){
    return(
        <div>
            <h1>Profile</h1>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" />
            <button>Edit Details</button>
            <p>Name: Muhammed Hisham</p>
            <p>Email: hishamac@gmail.com</p>
            <button>Change Password </button>
            <hr />
            <div>
                <p>Your Data Files</p>
                <hr />
                <div>
                    <p>First File</p>
                    <p>First file description</p>
                    <hr />
                </div>
                <div>
                    <p>Second File</p>
                    <p>Second file description</p>
                    <hr />
                </div>
                <div>
                    <p>Third File</p>
                    <p>Third file description</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}