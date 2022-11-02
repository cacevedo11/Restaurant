import React from 'react'

function Register() {
    return (
        <div className='flex  w-[100%] max-h-screen m-auto overflow-hidden  items-center justify-center '>

            <div class="flex min-h-full w-[100%] sm:w-[50%] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="w-full max-w-md space-y-8">
                    <div>
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Regístrate</h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            <a href="#" class="font-medium text-gray-500 hover:text-indigo-500"> Inicia Sesión</a>
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div class="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label for="password" class="sr-only">Nombre</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Nombre" />
                            </div>
                            <div>
                                <label for="password" class="sr-only">Apellido</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Apellido" />
                            </div>
                            <div>
                                <label for="password" class="sr-only">Nombre de Usuario</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Nombre de Usuario" />
                            </div>
                            <div>
                                <label for="email-address" class="sr-only">Email</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email" />
                            </div>
                            <div>
                                <label for="password" class="sr-only">Contraseña</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Contraseña" />
                            </div>
                            <div>
                                <label for="password" class="sr-only">Confirmar Contraseña</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Confirmar Contraseña" />
                            </div>
                        </div>

                        <div class="flex items-center justify-between">


                            <div class="text-sm">
                                <a href="#" class="font-medium text-gray-500 hover:text-indigo-500">Ya tienes cuenta?</a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">

                                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Regístrate
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <img className='xs:hidden w-[100%]' src='https://i.postimg.cc/526RVwFv/Fondo-de-IMG-5359-eliminado.png' alt='' />
            </div>


        </div>

    )
}

export default Register