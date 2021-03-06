import react from 'react'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'
import '../CSS/Header.css'


function Header(){
    return(
        <div className="header">
            <IconButton>
                <PersonIcon fontSize='large' className='header_Icon'></PersonIcon>
            </IconButton>            
            {/* <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt=""></img> */}
            <IconButton>
                <ForumIcon fontSize='large' className='header_Icon'></ForumIcon>
            </IconButton>            
        </div>
    )
}

export default Header