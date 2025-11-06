'use client'

import {ChangeEventHandler, FC, useCallback, useState} from "react";
import {Users2} from 'lucide-react';
import {useSearchParams} from "next/navigation";
import {personaUserIds} from "@/lib/data/persona-user-ids";

export type UserPickerProps = {};

export const UserPicker: FC<UserPickerProps> = (props) => {
  const [isChoiceAvailable, setIsChoiceAvailable] = useState(false);
  const initialSearchParams = useSearchParams();

  const personaValue = initialSearchParams.get('persona');

  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
    const data = event.target.value;

    const searchParams = new URLSearchParams(initialSearchParams);
    searchParams.set('persona', data);

    window.location.search = searchParams.toString();
  }, [initialSearchParams]);

  return <div className="w-fit flex flex-row justify-center items-center border border-green-500 rounded-full text-gray-600 h-10 min-w-10" >
    <select
      name="persona"
      defaultValue={personaValue ?? ''}
      aria-hidden={!isChoiceAvailable}
      className={`transition-all duration-100 overflow-hidden ${isChoiceAvailable ? 'w-fit' : 'w-0'} ${isChoiceAvailable ? 'mx-1 ml-1.5' : ''}`}
      onChange={handleChange}
    >
      {
        personaUserIds.map((name) => <option key={name} value={name} >
          {name}
        </option>)
      }
    </select>

    <button
      onClick={() => setIsChoiceAvailable((current) => !current)}
      className={`${isChoiceAvailable ? 'mr-1.5' : ''}`}
    >
      <Users2 />
    </button>
  </div>;
}