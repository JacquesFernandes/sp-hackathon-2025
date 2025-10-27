import {FC} from "react";
import {UserRoundIcon} from 'lucide-react';

export type SearchPersonalisationProps = {};

export const SearchPersonalisation: FC<SearchPersonalisationProps> = ({}) => {
  return <section id="search-personalisation" className="border-2 border-green-300 rounded-3xl bg-green-50 p-3 mt-3 " >
    <div className="w-full flex flex-row gap-2 justify-start items-center text-green-600" >
      <UserRoundIcon />

      <h2>You</h2>
    </div>

    <div className="mt-1 text-green-800 flex flex-col gap-1" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl dapibus, imperdiet leo nec, ultricies mi. Etiam ultrices diam urna, a semper nunc pellentesque sed. Cras mollis euismod congue. Suspendisse in hendrerit erat, et commodo leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur aliquet cursus mattis. Quisque erat lectus, pretium venenatis lectus nec, rutrum consectetur magna. Quisque in egestas magna, quis dignissim neque. Etiam viverra in lorem in commodo. Pellentesque eu ultricies diam, non rutrum justo. Pellentesque ac nunc vel eros convallis eleifend. Cras a sem mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in massa interdum, semper risus ut, sollicitudin est. Sed odio sapien, blandit vitae mi at, auctor rhoncus est. Nulla in ante vitae tellus imperdiet aliquam ac ac purus.</p>
    </div>
  </section>
}