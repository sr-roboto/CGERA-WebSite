import React, { useState, useEffect } from 'react';
import useAuth from '../context/UseAuth';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { X } from 'lucide-react';

Modal.setAppElement('#root'); // Ajusta esto según tu estructura de proyecto

function Login({ modalIsOpen, setModalIsOpen }) {
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signin(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setModalIsOpen(false);
    }
  }, [isAuthenticated, setModalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Iniciar Sesión"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black/30 backdrop-opacity-95"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-auto relative">
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-4 right-4  rounded-full p-2 hover:bg-gray-100"
        >
          <X size={16} color="#2e3440" />
        </button>
        <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">
          Iniciar Sesión
        </h2>
        {loginErrors.map((error, i) => (
          <div
            className="text-error-content bg-error py-2 px-3 text-sm rounded-lg mb-1"
            key={i}
          >
            {error}
          </div>
        ))}

        <form
          className="space-y-4 text-black"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control">
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              {...register('username', { required: true })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <p className="text-error-content text-sm">
              {errors.username && 'El nombre de usuario es obligatorio'}
            </p>
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              {...register('password', { required: true, minLength: 5 })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <p className="text-error-content text-sm">
              {errors.password &&
                'La contraseña debe tener al menos 6 caracteres'}
            </p>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default Login;
