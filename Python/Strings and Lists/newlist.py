x = [19,2,54,-2,7,12,98,32,10,-3,6]
print x
x.sort()
print x
first_list = x[:len(x)/2] # optional first parameter of slice defaults to zero
second_list = x[len(x)/2:] # optional second parameter of slice defaults to the list's length
print "first list", first_list
print "second_list", second_list
second_list.insert(0,first_list)
print second_list