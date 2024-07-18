from glob import glob

components = glob("*.tsx")

with open("index.ts", "w") as file:
    for component in components:
        filename = component.split(".tsx")[0]
        camel_case = "".join([word.capitalize() for word in filename.split("-")])

        file.write("export { default as " + camel_case + " } from './" + filename + "';\n")