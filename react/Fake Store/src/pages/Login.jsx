import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const { register, handleSubmit } = useForm();

    const {setLogado } = useContext(Context);
    const navigate = useNavigate();

    function logar(dados) {
        if(dados.email == "example@email.com" && dados.senha == "senha123"){
            setLogado(true);
            navigate('/home');
        }
    }

    return (
        <div className='bg-primary-500 h-screen flex align-items-center justify-content-center px-3'>
            <form onSubmit={handleSubmit(logar)} className='col-12 sm:col-6 md:col-4 lg:col-2 surface-0 px-3 py-3 border-round-md'>
                <h2 className='text-center text-xl'>Seja Bem-vindo(a)</h2>

                <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                <InputText
                    id='email'
                    type='email'
                    placeholder='example@email.com'
                    className='mb-3 w-full'
                    {...register('email', { required: true })}
                />

                <div className='mb-4'>
                    <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>
                    <IconField>
                        <InputIcon
                            className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                            onClick={() => setMostrarSenha(!mostrarSenha)}
                        />
                        <InputText
                            id='senha'
                            type={mostrarSenha ? 'text' : 'password'}
                            placeholder='Digite a senha correta'
                            className='w-full'
                            {...register('senha', { required: true })}
                        />
                    </IconField>
                </div>

                <Button
                    label="Entrar"
                    type='submit'
                    className='w-full'
                />
            </form>
        </div>
    );
}

export default Login;