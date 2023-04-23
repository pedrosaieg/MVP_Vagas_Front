import CompanyForm from '../companies/CompanyForm'
import styles from './NewCompany.module.css'

import { useNavigate } from 'react-router-dom'

function NewCompany() {

    const navigate = useNavigate()

    function createPost(company) {

        const formData = new FormData();
        formData.append('nome', company.nome);
        formData.append('ramo_atuacao', company.ramo_atuacao);
        formData.append('sobre', company.sobre);
        formData.append('link', company.link);
        formData.append('tamanho', company.tamanho);

        fetch("http://localhost:5000/empresa",
            {
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: formData,
            })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/', { state: { message: 'Empresa cadastrada com sucesso!' } })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.newcompany_container}>
            <h1>Cadastre empresa</h1>
            <p>Cadastre uma empresa para adicionar vagas</p>
            <CompanyForm handleSubmit={createPost} btnText="Salvar" />
        </div>
    )
}

export default NewCompany