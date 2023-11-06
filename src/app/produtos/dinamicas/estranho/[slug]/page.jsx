import Link from 'next/link'
import React from 'react'

export default function MeuProduto({params}) {
  return (
    <div>
        <h1>Recuperando o parâmetro [slug]</h1>
        <div>
            <p>O valor é : {params.slug}</p>
            <p><Link href="/">Voltar...</Link> </p>
        </div>
    </div>
  )
}
