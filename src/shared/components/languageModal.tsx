import { X } from 'phosphor-react';
import { Dispatch, SetStateAction, useRef } from 'react';
import Modal from 'react-modal';

interface IProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export function LanguageModal({ isVisible, setIsVisible }: IProps) {
  const subtitle = useRef<HTMLHeadingElement>(null);
  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = '#f00';
      subtitle.current.style.backgroundColor = '#000';
    }
  }

  function closeModal() {
    setIsVisible(false);
  }

  return (
    isVisible && (
      <Modal
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 rounded-xl"
        isOpen={isVisible}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
      >
        <section className="p-6">
          <div className="flex justify-between items-center w-[60vw]">
            <h1 id="dialog-title" className="text-white text-2xl font-bold">
              Escolha um idioma
            </h1>
            <button
              type="button"
              aria-label="Close Navigation"
              className="text-white text-xl font-thin p-2 rounded-full bg-black/30"
              onClick={() => setIsVisible(!isVisible)}
            >
              <X size={18} />
            </button>
          </div>
          <p id="dialog-description" className="text-white">
            Essa configuração atualiza o que você lê no open.spotify.com
          </p>
        </section>
        <div className="w-full h-[1px] bg-zinc-700" />
        <section className="p-6">a</section>
      </Modal>
    )
  );
}
