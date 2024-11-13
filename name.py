name = input("Ievadiet savu vārdu: ")
with open("name.txt", "w")as file:
    file.write(name)
    