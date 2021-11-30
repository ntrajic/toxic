**Instructions**:

	0. npm i <enter> 

	Run the above to build the compiled model - predictor, 
	which logic is exposed in one generated javascript file gen_out.js from the the TypeScript mainline(1.) and 
	tfjs libraries defined in the package.json file.

	1. in src/index.ts file define INPUTS for the toxic compiled model - predictor: 

	Each statement - a sentence - is one elment in the array: sentences

	2. npm run start <enter>  

	Run the above to supply each sentence to the toxic predictor, to evaluate whether the semantics of the sentence is toxic or not
	The result of the predictor for each sentence supplied in the input, is captured in the inspect_out.txt file.
