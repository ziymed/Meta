import React from 'react'
import { Link } from 'react-router-dom'

function SpecialSection() {
  return (
    <section className="specials | bg-white padding-block-900 border-bottom">
        <div className="container flow">
            <div className="even-columns vertical-align-center">
                <div className="justify-self-start">
                    <h2 className="text-black fs-700">This week specials!</h2>
                </div>
                <div className="justify-self-end">
                    <Link to="/online-menu" className="button" data-type="primary">Online Menu</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialSection