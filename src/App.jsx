import { useState } from "react"
import { Search } from "./Search";

const targets = [
  { 'id': 'nietzsche',    'name': 'Friedrich Nietzsche' },
  { 'id': 'gauss',        'name': 'Carl Friedrich Gauss' },
  { 'id': 'turing',       'name': 'Alan Turing' },
  { 'id': 'kepler',       'name': 'Johannes Kepler' },
  { 'id': 'hesse',        'name': 'Hermann Hesse' },
  { 'id': 'newton',       'name': 'Isaac Newton' },
  { 'id': 'maquiavelo',   'name': 'Nicolás de Bernardo de Maquiavelo' },
  { 'id': 'luther_king',  'name': 'Martin Luther King Jr.' },
  { 'id': 'locke',        'name': 'John Locke' },
  { 'id': 'leibniz',      'name': 'Gottfried Wilhelm Leibniz' },
  { 'id': 'kant',         'name': 'Immanuel Kant' },
  { 'id': 'sartre',       'name': 'Jean-Paul Sartre' },
  { 'id': 'russell',      'name': 'Bertrand Russell' },
  { 'id': 'tesla',        'name': 'Nikola Tesla' },
  { 'id': 'poe',          'name': 'Edgar Alan Poe' },
  { 'id': 'schopenhauer', 'name': 'Artur Schopenhauer' },
  { 'id': 'cortazar',     'name': 'Julio Cortázar' },
  { 'id': 'tolstoi',      'name': 'León Tolstói' },
  { 'id': 'thoreau',      'name': 'Henry David Thoreau' },
  { 'id': 'orwell',       'name': 'George Orwell' },
  { 'id': 'arendt',        'name': 'Hannah Arendt' },
  { 'id': 'escohotado',   'name': 'Antonio Escohotado' },
  { 'id': 'foucault',     'name': 'Michael Foucault' },
  { 'id': 'curie',        'name': 'Marie Curie', },
  { 'id': 'cioran',       'name': 'Emil Cioran' }
]

export const App = () => {
  const [selectedImage, setselectedImage] = useState(targets[20]);

  const handleNextClick = () => {
    const currentIndex = targets.findIndex(target => target.id == selectedImage.id);
    if (currentIndex + 1 > targets.length - 1) setselectedImage(targets[0]);
    else setselectedImage(targets[currentIndex + 1]);
  }

  const handlePreviousClick = () => {
    const currentIndex = targets.findIndex(target => target.id == selectedImage.id);
    if (currentIndex - 1 < 0) setselectedImage(targets[targets.length - 1]);
    else setselectedImage(targets[currentIndex - 1]);
  }

  return (
    <>
      <header className="bg-slate-950 text-slate-50 h-12">
        <div className="w-full h-full flex justify-around items-center relative">
          <h1>AR APP</h1>
          <div>
            <Search targets={targets} setselectedImage={setselectedImage} />
          </div>
          <div></div>
        </div>
      </header>
      <section
        className="bg-slate-900 relative select-none"
        style={{
          height: 'calc(100vh - 48px)'
        }}
      >
        <div className="w-full h-full">
          <img
            src={`/${selectedImage.id}.jpg`}
            alt={selectedImage.name}
            className="w-full object-contain"
            style={{
              height: 'calc(100vh - 48px)'
            }}
          />
        </div>

        <div
          id="previous"
          className="absolute left-2 top-1/2 cursor-pointer"
          onClick={handlePreviousClick}
        >
          <img src="/left-arrow.svg" alt="" />
        </div>
        <div
          id="next"
          className="absolute right-2 top-1/2 cursor-pointer"
          onClick={handleNextClick}
        >
          <img src="/right-arrow.svg" alt="" />
        </div>
      </section>
    </>
  )
}