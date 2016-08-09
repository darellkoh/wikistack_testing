var chai = require('chai'); 
var expect = chai.expect; 
var spies = require('chai-spies'); 
chai.use(spies); 

describe('Math addition', function(){
	it('should add', function(){
		var four = 2 + 2; 
		expect(four).to.be.equal(4); 
	}); 
});

describe('Set TimeOut', function(){
	it('set timeout of 1000 ms', function(done){
		var start = new Date(); 
		setTimeout(function(){
			var duration = new Date() - start; 
			expect(duration).to.be.closeTo(1000, 50); 
			console.log(duration); 
			done(); 
		}, 1000); 
	}); 
});

describe('Spy forEach method', function(){
	it('invokes a function once for each element', function(){
		var arr = [1, 2, 3, 4]; 
		function fun(val, index){
			console.log('val: ' + val + 'index: ' + index); 
		}
		fun = chai.spy.on(fun); 
		arr.forEach(fun);
		expect(fun).to.have.been.called.exactly(4);
	});
	 
});