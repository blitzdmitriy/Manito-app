import './Side.css'

export const Side = ({ icon, title, text }) => {
    return (
        <div class="content-side_list-item">
            <img class="content-side_list-item--img" src={icon} alt={title} />
            <h5 class="content-side_list-item--title">{title}</h5>
            <p class="content-side_list-item--text">{text}</p>
        </div>
    )

}