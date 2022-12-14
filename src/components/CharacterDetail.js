import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";
import g from "../images/g.png";
import s from "../images/s.png";
import r from "../images/r.png";
import h from "../images/h.png";
import hogwarts from "../images/hogwarts.png";

function CharacterDetail(props) {
    const getAlive = (character) => {
        if (character !== true) {
            return ('Desapareció mágicamente de este mundo');
        } else {
            return ('sigue con nosotros y desbordando mágia');
        };
    }
    const iconAlive = () => {
        if (props.character.alive) {
            return <i className='fas fa-heartbeat'></i>;
        }
        return <i class="fa-solid fa-heart-crack"></i>;
    };

    const flag = (value) => {
        if (value === 'Gryffindor') {
            return g;
        } else if (value === 'Slytherin') {
            return s;
        } else if (value === 'Hufflepuff') {
            return h;
        } else if (value === 'Ravenclaw') {
            return r;
        } else {
            return hogwarts;
        }
    };
    const genderChar = (value) => {
        if (value === "female") {
            return "mujer";
        } else { return "hombre"; }
    };



    return (
        <section className="detail">
            <Link to='/' className=''>
                <p className='detail__link'>Home</p>
            </Link>
            <article className="detail__article">
                <img
                    className="detail__article--img"
                    src={props.character.image}
                    alt={`foto de ${props.character.name}`}
                    title={`foto de ${props.character.name}`}></img>
                <div className="detail__container">
                    <h4 className="detail__container--title">{props.character.name}</h4>
                    <p className="detail__container--text">{props.character.species}</p>
                    <p className="detail__container--text">{genderChar(props.character.gender)}</p>

                    <p className="detail__container--text">{getAlive(props.character.alive)}{iconAlive()}</p>
                    <p className="detail__container--text">{props.character.alternateNames}</p>
                    <p className="detail__container--text">{props.character.house}</p>
                    <img
                        className="detail__container--house"
                        src={flag(props.character.house)}
                        alt={`Foto de ${props.character.house}`}
                        title={`Foto de ${props.character.house}`}>
                    </img>
                </div>
            </article>
        </section>
    )

};
export default CharacterDetail;