# Complex logic at breakneck speed: Try Julia for data science
### We show a comparative performance benchmarking of Julia with an equivalent Python code to show why Julia is great for data science and machine learning.

## Introduction

___“Walks like Python, runs like C”___ — this has been said about Julia, a modern programming language, focused on scientific computing, and having an ever-increasing base of followers and developers.

Julia, a general-purpose programming language, is made specifically for scientific computing. It is a [flexible dynamically-typed](https://android.jlelse.eu/magic-lies-here-statically-typed-vs-dynamically-typed-languages-d151c7f95e2b) language with performance comparable to traditional statically-typed languages.

Julia tries to provide a single environment productive enough for prototyping and efficient for industrial-grade applications. It is a multi-paradigm language encompassing both [functional](https://codeburst.io/a-beginner-friendly-intro-to-functional-programming-4f69aa109569) and object-oriented programming components, although the majority of the users like its functional programming aspects.

The inception of this programming language can be traced back to 2009. The lead developers Alan Edelman, Jeff Bezanson, Stefan Karpinski, and Viral Shah started working on creating a language that can be used for better and faster numerical computing. The developers were able to launch a commercial release in February 2012.

## Why is it awesome for data science?

Julia is an excellent choice for data science and machine learning work, for much of the same reason, that it is a great choice for fast numerical computing. The advantages include,

- **A smooth learning curve**, and the extensive underlying functionality. Especially, if you are already familiar with the more popular data science languages like Python and R, picking up Julia will be a walk in the park.

- **Performance**: Originally, Julia is a compiled language, while Python and R are interpreted. This means that the Julia code is executed on the processor as a direct executable code.

- **GPU Support**: It is directly related to performance. GPU support is transparently controlled by some packages such as `TensorFlow.jl` and `MXNet.jl`.

- **Distributed and Parallel Computing Support**: Julia supports parallel and distributed computing transparently using many topologies. And there is also support for coroutines, like in Go programming language, which are helper functions that work in parallel on the Multicore architecture. Extensive support for threads and synchronization is primarily designed to maximize performance and reduce the risk of race conditions.

- **Rich data science and visualization libraries**: Julia community understands that it was conceived as a go-to language for data scientists and statisticians. Therefore, high-performance libraries focusing on data science and analytics are always in development.

- **Teamwork (with other languages/frameworks)**: Julia plays really really well with other established languages and frameworks for data science and machine learning. Using `PyCall` or `RCall` one can use native Python or R code inside a Julia script. The `Plots` package works with various backend including `Matplotlib` and `Plotly`. Popular machine learning libraries like `Scikit-learn` or `TensorFlow` already have Julia equivalent or wrappers.
