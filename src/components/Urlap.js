import React from 'react'

export default function Urlap() {



  return (
    <div>
        <form>
            <div className="mb-3 mt-3">
                <label for="title" className="form-label">Szakdolgozat címe: </label>
                <input type="title" className="form-control" id="specialist_name" placeholder="" name="specialist_name"/>
            </div>
            <div className="mb-3">
                <label for="title" className="form-label">Készítők: </label>
                <input type="title" className="form-control" id="name" placeholder="" name="name"/>
            </div>
            <div className="mb-3">
                <label for="link" className="form-label">Az oldal elérhetősége: </label>
                <input type="link" className="form-control" id="pagelink" placeholder="" name="pagelink"/>
            </div>
            <div className="mb-3">
                <label for="link" className="form-label">GitHub elérhetőség: </label>
                <input type="link" className="form-control" id="githublink" placeholder="" name="githublink"/>
            </div>
            <button type="submit" className="btn btn-primary">Új</button>
        </form>
    </div>
  )
}
