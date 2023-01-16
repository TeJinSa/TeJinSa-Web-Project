import { useState } from 'react';
import FullModal from '../components/FullModal';
import ProblemForm from '../components/ProblemForm';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      Main
      <button type="button" onClick={() => setShowModal(true)}>
        button
      </button>
      {showModal && (
        <FullModal close={handleCloseModal}>
          <ProblemForm close={handleCloseModal} />
        </FullModal>
      )}
    </div>
  );
};
export default Main;
