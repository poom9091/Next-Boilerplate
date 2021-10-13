import React from "react";
// name={person.name}
// username={person.username}
// phone={person.phone}
// email={person.email}
// proflle={faker.image.image}
export default class Carduser extends React.Component {
  constructor(props) {
super(props);
  }
  render() {
    return (
      <div className="flex shadow-xl  rounded-xl border-4 bg-white">
        <div>
            <img alt="avatar" src={this.props.avatar} className="rounded-l-lg " />
        </div>
        <div className={`px-4 w-full border-${this.props.colortheme} border-b-4 border-l-4 bor`}>
            <div className="p-1">
                <h1 className={` text-xl font-semibold text-${this.props.colortheme}`} > {this.props.name}</h1>
                <h1 className=" text-sm font-semibold text-gray-500 ">{this.props.username}</h1>
            </div>
             
            <div className=" px-1">
                <div className="text-xs flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg> 
                  <h1 className=" px-2">Phone: {this.props.phone}</h1>
                </div>
                <div className="text-xs flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h1 className="px-2">Email: {this.props.email}</h1>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
