from turtle inport *

pencil = turtle()

colors = ["red", "purple", "orage", "lime green", "light blue", "yellow"]

for i in range(6):
    pencil.color(colors[i])
    pencil.width(5)
    pencil.fd(100)
    pencil.rt(90)

done()