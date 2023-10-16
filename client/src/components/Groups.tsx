import { Group } from "../types/types";

export const Groups = ({
   groups,
   handleClick,
}: {
   groups: Group[];
   handleClick: (id: number) => void;
}) => {
   return (
      <ul>
         {groups.length > 0 &&
            groups.map((group: Group) => (
               <li
                  key={group.id}
                  onClick={() => {
                     handleClick(group.id);
                  }}
               >
                  <a href="#">
                     {group.name} - {group.products_amount}
                  </a>
               </li>
            ))}
      </ul>
   );
};
