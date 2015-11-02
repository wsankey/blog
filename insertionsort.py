#Start with unsorted list
ourlist = [90, 100, 20, 10]
print ourlist

def insertionSort(ourlist):
    for index in range(1, len(ourlist)):

        currentvalue = ourlist[index]
        position = index

        while position > 0 and ourlist[position-1]>currentvalue:
            ourlist[position]=ourlist[position-1]
            position = position-1

        ourlist[position] = currentvalue
#Call the function
insertionSort(ourlist)
print(ourlist)