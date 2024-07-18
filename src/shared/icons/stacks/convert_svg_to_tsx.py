import os
from glob import glob
from typing import List

vectors: List[str] = glob("*.svg")

for vector in vectors:
    filename = vector.split(".svg")[0]

    with open (vector, "r") as file:
        content = file.read()
        content = content.replace("<svg", "<svg {...props}")
        
        with open (f"{filename}.tsx", "w") as file:
            camel_case = "".join([word.capitalize() for word in filename.split("-")])

            file.write("import type { ComponentProps, FC } from 'react'; const " + camel_case + ": FC<ComponentProps<'svg'>> = (props) => (" + content + ");export default " + camel_case + ";")

    os.remove(vector)
