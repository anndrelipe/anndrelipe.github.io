import { useEffect, useState } from 'react'
import './Global.css'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import AddedItems from './components/AddedItems'
import Cupom from './components/Cupom'
import ValueReview from './components/ValueReview'
import Total from './components/Total'
import Continue from './components/Continue'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function App() {
  const element = <FontAwesomeIcon icon={faTrash} size="sm" style={{ color: "#d00b0b", }} />

  const taxaServico = 0.99
  const precoUnitario = 147.60

  let [quantidade, Setquantidade] = useState(1)
  let [valor, Setvalor] = useState(element)
  let precoTotal = (precoUnitario * quantidade)

  let [taxaEntrega, SetTaxaEntrega] = useState(8.10)

  let aPagar = Number(precoTotal + taxaEntrega + taxaServico)
 
  let [entrega, Setentrega] = useState('a entrega')

  useEffect(() => {
    if (precoTotal >= 500) {
      Setentrega('entrega grátis')
      SetTaxaEntrega(0.0)
    } else {
      Setentrega('a entrega')
      SetTaxaEntrega(8.10)
    }
  },[precoTotal])

  const soma = () => {
    Setquantidade(quantidade + 1);
    Setvalor(valor = '-')
  }

  const subtracao = () => {
    if (quantidade != 1) {
      Setquantidade(quantidade - 1);
    }
    if (quantidade == 2) {
      Setvalor(valor = element)
    }
  }


  return (
    <>
      <div>
        <Header />
        <SubHeader />
        <AddedItems precoTotal={precoTotal.toFixed(2)} soma={soma} subtracao={subtracao} valor={valor} quantidade={quantidade} />
        <Cupom />
        <ValueReview taxaServico={taxaServico.toFixed(2)} taxaEntrega={taxaEntrega.toFixed(2)} precoTotal={precoTotal.toFixed(2)} />
        <Total aPagar={aPagar.toFixed(2)}/>
        <Continue quantidade={quantidade} aPagar={aPagar.toFixed(2)} entrega={entrega} />
      </div>
    </>
  )
}

export default App
