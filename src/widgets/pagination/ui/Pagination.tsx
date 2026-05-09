import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type Props = {
  activePage: number;
  setActivePage: (val: number) => void;
  totalPages: number;
};

const pagination = (activePage: number, totalPages: number) => {
  const MAX = 9;

  if (totalPages <= MAX) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];

  const first = 1;
  const last = totalPages;

  pages.push(first);

  let start, end;

  if (activePage <= 5) {
    start = 2;
    end = 7;
  } else if (activePage >= totalPages - 4) {
    start = totalPages - 6;
    end = totalPages - 1;
  } else {
    start = activePage - 2;
    end = activePage + 2;
  }

  if (start > 2) {
    pages.push("...");
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) {
    pages.push("...");
  }

  pages.push(last);

  return pages;
};

export const Pagination = ({
  activePage,
  totalPages,
  setActivePage,
}: Props) => {
  const editActivePage = (d: "increment" | "decrement") => {
    if (d === "increment") {
      if (activePage === totalPages) return;
      setActivePage(activePage + 1);
    } else {
      if (activePage === 1) return;
      setActivePage(activePage - 1);
    }
  };
  return (
    <div className="flex items-center justify-center h-max">
      <MdArrowBackIos
        size={20}
        className={`cursor-pointer ${activePage === 1 && "text-gray-400 cursor-not-allowed"}`}
        onClick={() => editActivePage("decrement")}
      />

      {pagination(activePage, totalPages).map((item, i) => (
        <span
          onClick={() => {
            if (typeof item === "number") {
              setActivePage(item);
            }
          }}
          key={i}
          className={`select-none w-6 h-6 flex items-center justify-center cursor-pointer`}
        >
          {item === activePage ? (
            <input
              type="number"
              defaultValue={activePage}
              onBlur={(e) => {
                const val = +e.target.value;
                if (val < 1) {
                  e.currentTarget.value = "1";
                  setActivePage(1);
                } else if (val > totalPages) {
                  e.currentTarget.value = String(totalPages);
                  setActivePage(totalPages);
                } else {
                  setActivePage(val);
                }
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  e.currentTarget.blur();
                }
              }}
              className="appearance-hide w-6 h-6 text-center border border-gray-400 rounded-md"
            />
          ) : (
            item
          )}
        </span>
      ))}
      <MdArrowForwardIos
        size={20}
        className={`ml-2 cursor-pointer ${activePage === totalPages && "text-gray-400 cursor-not-allowed"}`}
        onClick={() => editActivePage("increment")}
      />
    </div>
  );
};
