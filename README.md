# How to run the solution

```
npm install

npm test
```

Easy as that!

---

# sum-of-files
Write a production-ready function that sums the numbers in a file and outputs details of the results. The function will receive as input the path to a single file. Each line of the file will contain either a number or a relative path to another file. For each file processed, output the file path and the sum of all of the numbers contained both directly in the file and in any of the sub files listed in the file (and their sub files, etc).

For example, if file A.txt contains:

```
3
19
B.txt
50
```


And file B.txt contains:

```
C.txt
27
```


And file C.txt contains:

```
10
2
```


Then the output of passing A.txt to the function might look something like this:

```
A.txt - 111
B.txt - 39
C.txt - 12
```


Note that this is just an example. The solution should be able to handle any set of files as described in the problem statement.
