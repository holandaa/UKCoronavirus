import React from 'react';


const ListaProdutos = (props) => {
    const { produtos } = props;
    if (!produtos || produtos.length === 0) return <p>Carregando ...</p>;
    return (
        <TabelaDeProdutos listaDeProdutos={produtos}/>
    );
};

class Linha extends React.Component {
    render() {
        const produto = this.props.produto;

        return (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.name}</td>
                <td>{produto.description}</td>
                <td>{produto.price}</td>
                <td>{produto.imgUrl}</td>
            </tr>
        );
    }
}

class TabelaDeProdutos extends React.Component {
    render() {
        const linhas = [];

        this.props.listaDeProdutos.forEach(
            (produto) => {
                linhas.push(
                    <Linha produto={produto} />
                );
            }
        );

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>{linhas}</tbody>
            </table>
        );
    }
}


export default ListaProdutos;