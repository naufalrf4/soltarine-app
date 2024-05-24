import React from 'react'

const AboutPage = () => {
  
  return (
      <div className="flex flex-col w-full border-opacity-50">
        <div className="flex items-stretch gap-4 bg-gray-300">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-20 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-lg/tight font-medium text-gray-900">Deskripsi</h3>

            <p className="mt-0.5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
              nesciunt quas non animi.
            </p>
          </div>
        </div>
        <div className="divider text-center">- - - - -</div>
        <div className="flex items-stretch gap-4 bg-gray-300">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-20 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-lg/tight font-medium text-gray-900">Teknologi</h3>

            <p className="mt-0.5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
              nesciunt quas non animi.
            </p>
          </div>
        </div>
        <div className="divider text-center">- - - - -</div>
        <div className="flex items-stretch gap-4 bg-gray-300">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-20 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-lg/tight font-medium text-gray-900">Lorem Ipsum</h3>

            <p className="mt-0.5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
              nesciunt quas non animi.
            </p>
          </div>
        </div>
      </div>
  )
}

export default AboutPage