import styles from './CompanyCard.module.css'

import { Link } from 'react-router-dom'

import { BsPencilSquare, BsTrash3, BsEye } from 'react-icons/bs'

function CompanyCard({ id, nome, ramo_atuacao, link, tamanho, vagas, handleRemove }) {
    return (
        <div className={styles.company_card}>
            <h4>{nome}</h4>
            <p><span>Área de atuação: </span>{ramo_atuacao}</p>
            <p><span>Funcionários: </span>{tamanho}</p>
            <p><span>Vagas: </span>{vagas}</p>
            <p><a href={link}>Website</a></p>
            <div className={styles.project_card_actions}>
                <Link to=" /">
                    <BsEye id="abc" />
                </Link>
                <Link to="/">
                    <BsPencilSquare id="abcd" />
                </Link>
                <button to="/">
                    <BsTrash3 />
                </button>
            </div>
        </div >
    )
}

export default CompanyCard