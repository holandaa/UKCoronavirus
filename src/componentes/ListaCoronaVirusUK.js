import React from 'react';


const ListaCoronaVirusUK = (props) => {
    const { dados } = props;
    if (!dados || dados.length === 0) return <p>Carregando ...</p>;
    return (
        <TabelaDeDadosCovid listaDeDadosCovid={dados}/>
    );
};

class Linha extends React.Component {
    render() {
        const dados = this.props.dados;

        return (
            <tr>
                <td>{dados.date}</td>
                <td>{dados.name}</td>
                <td>{dados.casesDaily}</td>
                <td>{dados.casesCumulative}</td>
                <td>{dados.deathsDaily}</td>
                <td>{dados.deathsCumulative}</td>
                <td>{dados.firstVaccinationsDaily}</td>
                <td>{dados.firstVaccinationsCumulative}</td>
                <td>{dados.secondVaccinationsDaily}</td>
                <td>{dados.secondVaccinationsCumulative}</td>
            </tr>
        );
    }
}

class TabelaDeDadosCovid extends React.Component {
    render() {
        const linhas = [];

        this.props.listaDeDadosCovid.forEach(
            (dado) => {
                linhas.push(
                    <Linha dados={dado} />
                );
            }
        );

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Cases Daily</th>
                        <th>Cases Cumulative</th>
                        <th>Deaths Daily</th>
                        <th>Deaths Cumulative</th>
                        <th>First VaccinationsDaily</th>
                        <th>First Vaccinations Cumulative</th>
                        <th>Second Vaccinations Daily</th>
                        <th>Second Vaccinations Cumulative</th>
                    </tr>
                </thead>
                <tbody>{linhas}</tbody>
            </table>
        );
    }
}


export default ListaCoronaVirusUK;