import { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'
import Loading from '../layout/Loading'

import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'
import CompanyCard from '../companies/CompanyCard'

import Message from '../layout/Message'

function Home() {

    const [companies, setCompanies] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [companyMessage, setCompanyMessage] = useState('')

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/empresas', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setCompanies(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 1000)
    }, [])

    function removeCompany(id) {

        const formData = new FormData();
        formData.append('id', id);
        const newCompanies = {};

        fetch(`http://localhost:5000/empresa?id=${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'applicatin/json'
            },
        })
            .then(resp => resp.json())
            .then(() => {
                const asArray = companies.empresas
                const filtered = asArray.filter((company) => company.id !== id)
                newCompanies.empresas = filtered
                setCompanies(newCompanies)
                setCompanyMessage('Empresa removida com sucesso.')
            })
            .catch(err => console.log(err))
    }


    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <>
            {!removeLoading ? <Loading /> : <>
                {message && <Message type="success" msg={message} />}
                {companyMessage && <Message type="success" msg={companyMessage} />}

                <section className={styles.top_container}>
                    <div>
                        <h1>Bem-vindo ao <span>Vagas</span></h1>
                        <h3>Empresas cadastradas</h3>
                    </div>
                    <div className={styles.button_container}>
                        <LinkButton to="/newcompany" text="Cadastrar Empresa" ></LinkButton>
                    </div>
                </section>

                <Container customClass="start">
                    {companies.empresas &&
                        companies.empresas.map(company => {
                            return <CompanyCard
                                id={company.id}
                                nome={company.nome}
                                ramo_atuacao={company.ramo_atuacao}
                                link={company.link}
                                tamanho={company.tamanho}
                                vagas={company.vagas}
                                key={company.id}
                                handleRemove={removeCompany}
                            />;
                        })}
                </Container>
            </>}

            {removeLoading && !companies.empresas && (
                <p>Não há empresas cadastradas.</p>
            )}

        </ >
    )
}

export default Home