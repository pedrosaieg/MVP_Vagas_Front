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

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <>
            {message &&
                <Message type="success" msg={message} />
            }

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
                            key={company.id} />;
                    })}
            </Container>

            {!removeLoading && <Loading />}
            {removeLoading && !companies.empresas && (
                <p>Não há empresas cadastradas.</p>
            )}

        </ >
    )
}

export default Home